import { expenseCategories, incomeCategories, resetCategories } from "./constants/Categories"
import { GlobalExpenseContext } from "./context/Context";

const useTransactions = (title) => {
    resetCategories();

    const {transactions} = GlobalExpenseContext()

    const transactionsPerType = transactions.filter((t) => t.type === title)

    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount,0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories

    console.log({transactionsPerType, total, categories})

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)

        if(category){
            category.amount += t.amount;
        }
    })

    const filteredCategories = categories.filter((c) => c.amount > 0)

    const chartdata = {
        datasets:[{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    }

    return {  total, chartdata}
}

export default useTransactions
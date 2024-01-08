import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles'
import useTransactions from '../../useTransactions'

const Details = ({title}) => {

  const classes = useStyles()
  const {total, chartdata} = useTransactions(title)

  return (
    <Card className={title==='Income' ? classes.income: classes.expenses}>
      <CardHeader title={title}/>
      <CardContent>
        <Typography variant='h5'>₦{total}</Typography>
        <Doughnut data={chartdata}/>
      </CardContent>
    </Card>
  )
}

export default Details

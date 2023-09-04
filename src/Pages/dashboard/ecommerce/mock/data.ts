export const statistics_data = {
    orders_bar_chart: {
      title: 'Orders',
      statistics: '2,76k',
      series: [
        {
          name: '2020',
          data: [45, 85, 65, 45, 65]
        }
      ]
    },
    profit_line_chart: {
      title: 'Profit',
      statistics: '6,24k',
      series: [
        {
          data: [0, 20, 5, 30, 15, 45]
        }
      ]
    },
    subscribers_gained: {
      series: [
        {
          name: 'Subscribers',
          data: [28, 40, 36, 52, 38, 60, 55]
        }
      ],
      analyticsData: {
        subscribers: 92600
      }
    },
    revenueGenerated: {
      series: [
        {
          name: 'Revenue',
          data: [350, 275, 400, 300, 350, 300, 450]
        }
      ],
      analyticsData: {
        revenue: 97500
      }
    },
    quarterlySales: {
      series: [
        {
          name: 'Sales',
          data: [10, 15, 7, 12, 3, 16]
        }
      ],
      analyticsData: {
        sales: '36%'
      }
    },
    ordersRecevied: {
      series: [
        {
          name: 'Orders',
          data: [10, 15, 8, 15, 7, 12, 8]
        }
      ],
      analyticsData: {
        orders: 97500
      }
    },
    siteTraffic: {
      series: [
        {
          name: 'Traffic Rate',
          data: [150, 200, 125, 225, 200, 250]
        }
      ]
    },
    activeUsers: {
      series: [
        {
          name: 'Active Users',
          data: [750, 1000, 900, 1250, 1000, 1200, 1100]
        }
      ]
    },
    newsletter: {
      series: [
        {
          name: 'Newsletter',
          data: [365, 390, 365, 400, 375, 400]
        }
      ]
    }
  }
  

export const analytics_data = {
    support_tracker: {
      title: 'Support Tracker',
      last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
      totalTicket: 163,
      newTicket: 29,
      openTicket: 63,
      responseTime: 1
    },
    avg_sessions: {
      sessions: 2700,
      last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
      growth: '+5.2%',
      goal: 100000,
      users: 100000,
      retention: 90,
      duration: 1
    },
    revenue_report: {
      years: ['2020', '2019', '2018'],
      price: '25,852',
      budget: '56,800'
    },
    goal_overview: {
      completed: '786,617',
      inProgress: '13,561'
    },
    revenue: {
      thisMonth: '86,589',
      lastMonth: '73,683'
    },
    product_orders: {
      last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
      chart_info: { finished: 23043, pending: 14658, rejected: 4758 }
    },
    sessions_device: {
      last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
      chart_info: [
        {
          icon: 'Monitor',
          name: 'Desktop',
          iconColor: 'text-primary',
          usage: 58.6,
          upDown: 2
        },
        {
          icon: 'Tablet',
          name: 'Mobile',
          iconColor: 'text-warning',
          usage: 34.9,
          upDown: 8
        },
        {
          icon: 'Tablet',
          name: 'Tablet',
          iconColor: 'text-danger',
          usage: 6.5,
          upDown: -5
        }
      ]
    },
    customers: {
      last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
      listData: [
        {
          icon: 'Circle',
          iconColor: 'text-primary',
          text: 'New',
          result: 690
        },
        {
          icon: 'Circle',
          iconColor: 'text-warning',
          text: 'Returning',
          result: 258
        },
        {
          icon: 'Circle',
          iconColor: 'text-danger',
          text: 'Referrals',
          result: 149
        }
      ]
    }
  }
import Mock from 'mockjs';
import setupMock from '@/utils/setupMock';
import { analytics_data,statistics_data } from './data';

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/card/revenue_report'), () => {
      return analytics_data.revenue_report;
    });
    Mock.mock(new RegExp('/api/card/orders-bar-chart'), () => {
      return statistics_data.orders_bar_chart;
    });
    Mock.mock(new RegExp('/api/card/profit-line-chart'), () => {
      return statistics_data.profit_line_chart;
    });
  },
});

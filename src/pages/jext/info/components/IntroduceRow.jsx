import { Col, Row } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { ChartCard } from './Charts';
import Trend from './Trend';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};

function formatNumArr(numArr) {
  const numStr = JSON.stringify(numArr, null, 1);

  if (numStr === undefined) {
    return undefined;
  }
  return numStr.substring(1, numStr.length - 1);
};

const IntroduceRow = ({ loading, visitData }) => (
  <Row gutter={24} type="flex">
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="jext.info.course.cto51" defaultMessage="51CTO Course"/>
        }
        total={formatNumArr(visitData.cto51.course.userCount)}
        footer={formatNumArr(visitData.cto51.course.user)}
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          {formatNumArr(visitData.cto51.course.count)}
        </Trend>
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="jext.info.blog.cto51" defaultMessage="51CTO Blog" />
        }
        total={formatNumArr(visitData.cto51.blog.count)}
        footer={formatNumArr(visitData.cto51.blog.reader)}
        contentHeight={46}
      >        
        <Trend
            flag="up"
            style={{
              marginRight: 16,
            }}
          >
            {formatNumArr(visitData.cto51.blog.subscribe)}
          </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="jext.info.course.csdn" defaultMessage="CSDN Course"/>
        }
        total={formatNumArr(visitData.csdn.course.userCount)}
        footer={formatNumArr(visitData.csdn.course.user)}
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          {formatNumArr(visitData.csdn.course.count)}
        </Trend>
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="jext.info.blog.csdn" defaultMessage="CSDN Blog" />
        }
        total={formatNumArr(visitData.csdn.blog.count)}
        footer={formatNumArr(visitData.csdn.blog.reader)}
        contentHeight={46}
      >
        <Trend
            flag="up"
            style={{
              marginRight: 16,
            }}
          >
            {formatNumArr(visitData.csdn.blog.score) + ", " + formatNumArr(visitData.csdn.blog.rank)}
          </Trend>
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;

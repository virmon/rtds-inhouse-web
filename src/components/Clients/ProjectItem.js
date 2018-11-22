import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class ProjectItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="project-item">
                <Card title="Project title" bordered={false} bodyStyle={{height:'200px'}}>
                </Card>
            </div>
        );
    }
}

export default ProjectItem;
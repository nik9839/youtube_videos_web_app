import React, { Component } from 'react';
import classes from './styles.module.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Table, Avatar, TableColumnText } from '../../components';
import { getVideos } from '../../requests'

export default class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            totalCount: 0,
            size: 4,
            pages: 0,
            loading: false
        }
    }

    handleVideos = (page, size) => {
        this.setState({ loading: true })
        getVideos(page, size)
            .then(response => {
                this.setState({
                    tableData: response["results"],
                    totalCount: response["count"],
                    size: size,
                    pages: (Math.ceil(response["count"] / size)),
                    loading: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    loadTableData = (page, size) => {
        this.handleVideos(page, size)
    };

    videos_table_columns = () => {
        return [
            {
                Header: <span>Avatar</span>,
                accessor: "avatar",
                Cell: row => (<Avatar url={row.value} />),
                maxWidth: 100,
                sortable: false
            },
            {
                Header: <span>First Name</span>,
                accessor: "title",
                sortable: false,
                Cell: row => <TableColumnText value={row.value} />
            },
            {
                Header: <span>Last Name</span>,
                accessor: "description",
                sortable: false,
                Cell: row => <TableColumnText value={row.value} />
            },
            {
                Header: <span>Friends</span>,
                accessor: "pk",
                sortable: false,
                Cell: row => (
                    <React.Fragment>
                        {/* Link to friends route*/}
                        <Link to={"/video/" + row.value + "/friends"}>
                            <Button variant="outline-primary" size="sm" style={{ margin: 5 }}>
                                Open
                            </Button>
                        </Link>
                    </React.Fragment>
                )
            }
        ]
    }

    render() {
        return (
            <Container fluid style={{ padding: 20 }}>
                <Row>
                    <Col md={12} style={{ fontSize: 32 }}>
                        <div className={classes.Heading}>Videos</div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={classes.SubContainer}>
                            <Table
                                tableData={this.state.tableData}
                                loading={this.state.loading}
                                pages={this.state.pages}
                                size={this.state.size}
                                columns={this.videos_table_columns()}
                                loadTableData={this.loadTableData}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
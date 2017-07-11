import React from 'react';

import { socket } from '../config';

export default class NewDealForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: '',
            color: '#000000',
            value: 0,
            packageType: '',
            tests: 0,
            users: 0,
            industry: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeTests = this.handleChangeTests.bind(this);
        this.handleChangePackage = this.handleChangePackage.bind(this);
        this.handleChangeUsers = this.handleChangeUsers.bind(this);
        this.handleChangeIndustry = this.handleChangeIndustry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        const { value } = e.target;
        this.setState({ _id: value });
    }

    handleChangeColor(e) {
        const { value } = e.target;
        this.setState({ color: value });
    }

    handleChangeAmount(e) {
        const { value } = e.target;
        this.setState({ value: value });
    }

    handleChangeTests(e) {
        const { value } = e.target;
        this.setState({ tests: value });
    }

    handleChangeUsers(e) {
        const { value } = e.target;
        this.setState({ users: value });
    }

    handleChangePackage(e) {
        const { value } = e.target;
        this.setState({ packageType: value });
    }

    handleChangeIndustry(e) {
        const { value } = e.target;
        this.setState({ industry: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        socket.emit('newDeal', this.state);
    }

    isDisabled() {
        const { _id, value, packageType, tests, users } = this.state;
        return !_id || !value || !packageType || !tests || !users;
    }

    render() {
        const isDisabled = this.isDisabled();
        return (
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" onChange={this.handleChangeName} value={this.state._id} />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input type="color" onChange={this.handleChangeColor} value={this.state.color} />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" onChange={this.handleChangeAmount} value={this.state.value} />
                </div>
                <div className="form-group">
                    <label>Package</label>
                    <input type="text" onChange={this.handleChangePackage} value={this.state.packageType} />
                </div>
                <div className="form-group">
                    <label>Number of tests</label>
                    <input type="number" onChange={this.handleChangeTests} value={this.state.tests} />
                </div>
                <div className="form-group">
                    <label>Concurrent Users</label>
                    <input type="number" onChange={this.handleChangeUsers} value={this.state.users} />
                </div>
                <div className="form-group">
                    <label>Industry</label>
                    <input type="text" onChange={this.handleChangeIndustry} value={this.state.industry} />
                </div>
                <button disabled={isDisabled} onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

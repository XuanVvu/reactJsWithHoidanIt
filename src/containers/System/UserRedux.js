import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }


    render() {
        return (
            <div className='user-redux-container'>
                <div className='title'>

                    <div className="text-center" >User Redux</div>
                </div>

                <div className='user-redux-body'>
                    <div className=''>Thêm mới người dùng</div>
                </div>


            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

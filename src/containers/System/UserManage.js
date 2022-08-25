import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUser, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUSersFromReact();
    }



    getAllUSersFromReact = async () => {
        let response = await getAllUser('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrayUsers: response.users
            })

        }
    }

    handleAddNewUSer = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUSersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' });
            }
        } catch (e) {
            console.log(e)
        }


    }

    handleDeleteUser = async (user) => {
        console.log('click delete', user)
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errCode === 0) {
                await this.getAllUSersFromReact();
            } else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }

    doEditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUSersFromReact()
            } else {
                alert(res.errMessage)
            }

        } catch (e) {
            console.log(e);
        }
    }


    render() {
        let arrayUsers = this.state.arrayUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser

                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }
                <div className='title text-center'>Manage users with Eric</div>
                <div className='mx-1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUSer()}
                    ><i className="fas fa-plus pe-2"></i>Add new users</button>
                </div>
                <div className='user-tale mt-3 mx-1'>

                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>

                            {arrayUsers && arrayUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button
                                                className='btn-edit'
                                                onClick={() => this.handleEditUser(item)}
                                            ><i className="fas fa-pencil-alt"></i></button>
                                            <button
                                                className='btn-delete'
                                                onClick={() => this.handleDeleteUser(item)}
                                            ><i className="fas fa-trash"></i></button>

                                        </td>
                                    </tr>
                                )

                            })

                            }


                        </tbody>
                    </table>

                </div >
            </div >
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

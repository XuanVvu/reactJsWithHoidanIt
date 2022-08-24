import React, { Component } from 'react';

import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='button-section'>Xem thêm</button>
                    </div>

                    <div className='section-body outstanding-doctor-body'>

                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>

                                        <div>Hệ thống y tế Thu Cúc 1</div>
                                        <div>Giáo sư tiến sĩ</div>
                                    </div>
                                </div>

                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>

                                        <div>Hệ thống y tế Thu Cúc 1</div>
                                        <div>Giáo sư tiến sĩ</div>
                                    </div>
                                </div>

                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>

                                        <div>Hệ thống y tế Thu Cúc 1</div>
                                        <div>Giáo sư tiến sĩ</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>

                                        <div>Hệ thống y tế Thu Cúc 1</div>
                                        <div>Giáo sư tiến sĩ</div>
                                    </div>
                                </div>

                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>

                                        <div>Hệ thống y tế Thu Cúc 1</div>
                                        <div>Giáo sư tiến sĩ</div>
                                    </div>
                                </div>

                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>

                                        <div>Hệ thống y tế Thu Cúc 1</div>
                                        <div>Giáo sư tiến sĩ</div>
                                    </div>
                                </div>

                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);

import React, { Component } from 'react';
import User from '../../../assets/img_avatar.png';
import '../style.css';

export default class index extends Component {

    state = { text: '', isImg: false, selectedImage: '', step: 1, topicId: '' };

    submitHandler(e) {
        e.preventDefault();
        const { profile } = this.props;
        const { text, topicId } = this.state;
        var data = {
            topicId: topicId, postedBy: profile._id, feed: text
        }
        this.setState({ text: '', isImg: false, selectedImage: '', step: 1, topicId: '' })
        this.props.submit(data);
    }

    handleImagePreview(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type === 'image/x-png' || event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/gif' || event.target.files[0].type === 'image/jpg' || event.target.files[0].type === 'image/jpeg') {
                this.setState({ selectedImage: URL.createObjectURL(event.target.files[0]), isImg: true });
            }
        }
    }

    renderStep1(profile) {
        const { text, selectedImage, isImg } = this.state;
        return <div className="modal-body" style={{ maxHeight: '70vh', overflow: 'auto' }}>
            <div className="col-12" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }} data-toggle="modal" data-target="#postMod">
                <img src={profile.image ? profile.image : User} alt="user" style={{ width: '40px', height: '40px', borderRadius: '1000px' }} />
                <div className="d-flex flex-column">
                    <h6 className="ml-3" style={{ fontWeight: '600', fontSize: '16px' }}>{profile.name}</h6>
                </div>
            </div>
            <div className="col-12 mt-4">
                <textarea className="post-comm" value={text} autoFocus placeholder='What do you want to talk about?' onChange={(e) => this.setState({ text: e.target.value })} />
                {isImg && <img src={selectedImage} alt="selected" style={{ width: '100%', height: '300px' }} />}
                <div className="col-12 p-0 d-flex flex-row justify-content-end">
                    {!isImg && <label className="btn btn-primary p-1" style={{ width: '40px', height: '40px', borderRadius: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa fa-camera" aria-hidden="true"></i>
                        <input type="file" accept="image/x-png,image/png,image/gif,image/jpeg,image/jpg" onChange={(event) => this.handleImagePreview(event)} style={{ display: 'none' }} />
                    </label>}
                </div>
            </div>
        </div>
    }

    renderList() {
        const { list } = this.props;
        return list && list.length > 0 && list.map(i => <div key={i._id} style={{ textDecoration: 'none', width: 'fit-content', color: 'black' }} className="col-lg-6 col-12 d-flex flex-row align-items-center pt-2 pb-2" to=''>
            <img src={i.image} alt="topic" style={{ width: '50px', height: '50px', borderRadius: '1000px', marginRight: '16px' }} />
            <h6 style={{ fontWeight: '400', color: 'grey', fontSize: '14px', cursor: 'pointer' }} onClick={(e) => this.setState({ topicId: i._id })}>{i.name}</h6>
        </div>);
    }

    renderListFiltered(topicId) {
        const { list } = this.props;
        return list && list.length > 0 && list.map(i => topicId === i._id && <div key={i._id} style={{ textDecoration: 'none', width: 'fit-content', color: 'black' }} className="col-12 d-flex flex-row align-items-center pt-2 pb-2" to=''>
            <img src={i.image} alt="topic" style={{ width: '50px', height: '50px', borderRadius: '1000px', marginRight: '16px' }} />
            <h6 style={{ fontWeight: '400', color: 'grey', fontSize: '14px', cursor: 'pointer', marginTop: '8px' }} onClick={(e) => this.setState({ topicId: '' })}>{i.name} <span className="fa fa-times ml-1"></span></h6>
        </div>);
    }

    renderStep2() {
        const { topicId } = this.state;
        return <div className="modal-body" style={{ maxHeight: '70vh', overflow: 'auto' }}>
            <h6 style={{ fontWeight: '600', fontSize: '16px' }}>Select Community</h6>
            <div className="col-12 d-flex flex-row flex-wrap">
                {topicId === '' ? this.renderList() : this.renderListFiltered(topicId)}
            </div>
        </div>
    }

    render() {
        const { profile } = this.props;
        const { step } = this.state;
        return <form className={"col-12 p-0 ask-something"} style={{ borderRadius: "5px", display: 'flex', flexDirection: 'column', marginBottom: '30px !important', backgroundColor: '#faf9f9', alignItems: 'center',width: `95%`,margin: `0 auto` }}
            onSubmit={(e) => this.submitHandler(e)}>
            <div className="col-12 pt-3 pb-2 pl-4" style={{borderRadius: "5px", backgroundColor: "#f3f5f6", borderBottom: '1px solid #dddfe2' }}>
                <h6 style={{ fontSize: "16px", fontWeight: '600', color: 'grey' }}>Ask Somthing</h6>
            </div>
            <div className="col-12 p-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }} data-toggle="modal" data-target="#postMod">
                <img src={profile.image ? profile.image : User} alt="user" style={{ width: '40px', height: '40px', borderRadius: '50px' }} />
                <h6 className="ml-3" style={{ fontWeight: '600', fontSize: '15px', color: 'grey' }}>Hi {profile.name} ! What is on your mind?</h6>
            </div>
            <div className="modal fade" id="postMod" tabIndex="-1" role="dialog" aria-labelledby="Post" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-danger" style={{ color: 'white' }}>
                            <h5 className="modal-title">Create post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="fa fa-times" style={{ color: 'white' }}></span>
                            </button>
                        </div>
                        {step === 1 && this.renderStep1(profile)}
                        {step === 2 && this.renderStep2(profile)}
                        <div className="modal-footer">
                            {step === 1 && <button type="button" className="btn btn-primary" onClick={(e) => this.setState({ step: 2 })}>Next <span className="fa fa-arrow-right ml-2"></span></button>}
                            {step === 2 && <button type="button" className="btn btn-primary" onClick={(e) => this.setState({ step: 1 })}>Back <span className="fa fa-arrow-left ml-2"></span></button>}
                            {step === 2 && <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn-primary" onClick={(e) => this.submitHandler(e)}> Post <span className="fa fa-send ml-2"></span></button>}

                        </div>
                    </div>
                </div>
            </div>
        </form >
    }
}

import { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

import axios from 'axios';

import * as EgovNet from 'api/egovFetch'
import { NOTICE_BBS_ID } from 'config'
import CODE from 'constants/code'
import URL from 'constants/url'

import EgovAttachFile from 'components/EgovAttachFile'
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform'

function EgovNoticeDetail(props) {
    console.group("EgovNoticeDetail");
    console.log("EgovNoticeDetail [props] : ", props);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovNoticeDetail [location] : ", location);

    // const bbsId = location.state.bbsId || NOTICE_BBS_ID;
    const orderId = location.state.orderId;
    const searchCondition = location.state.searchCondition;

    const [acceptOrderopen, setAcceptOrderOpen] = useState(false);
    const [rejectOrderopen, setRejectOrderOpen] = useState(false);
    const [prepareFoodopen, setPrepareFoodOpen] = useState(false);
    const [notifyRideropen, setNotifyRiderOpen] = useState(false);
    const condition = true; 

    const [entity, setEntity] = useState("");

    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/orders/${orderId}`;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }
        EgovNet.requestFetch(retrieveDetailURL,
            requestOptions,
            function (resp) {
                setBoardDetail(resp);
            }
        );
    }
    useEffect(function () {
        retrieveDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function deleteList(){
        axios.delete(`/orders/${orderId}`)
        navigate('/orderManagement/orders');
    }
    function acceptOrder(){

        axios.put(`/orders/${orderId}/acceptorder`, {orderId: entity }) 
        .then(response => {
            setAcceptOrderOpen(false);
        })
    }
    function rejectOrder(){

        axios.put(`/orders/${orderId}/acceptorder`, {orderId: entity }) 
        .then(response => {
            setAcceptOrderOpen(false);
        })
    }
    function prepareFood(){

        axios.put(`/orders/${orderId}/acceptorder`, {orderId: entity }) 
        .then(response => {
            setAcceptOrderOpen(false);
        })
    }
    function notifyRider(){

        axios.put(`/orders/${orderId}/acceptorder`, {orderId: entity }) 
        .then(response => {
            setAcceptOrderOpen(false);
        })
    }

    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to="/orderManagement/orders">Order</Link></li>
                        <li>{masterBoard && masterBoard.bbsNm}</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_VIEW" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">Order</h1>
                        </div>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view">
                            <div className="board_view_top">
                                <div className="tit">{orderId}</div>
                                <div className="info">
                                    <dl>
                                        <dt>OrderId</dt>
                                        <dd>{orderId}</dd>
                                    </dl>
                                    <dl>
                                        <dt>RestaurantId</dt>
                                        <dd>{boardDetail && boardDetail.restaurantId }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Status</dt>
                                        <dd>{boardDetail && boardDetail.status }</dd>
                                    </dl>
                                    <dl>
                                        <dt>StatusType</dt>
                                        <dd>{boardDetail && boardDetail.statusType }</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    <div style={{marginTop: "5px"}}>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setAcceptOrderOpen(true);
                                            }
                                        }}>
                                            AcceptOrder
                                        </button>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setRejectOrderOpen(true);
                                            }
                                        }}>
                                            RejectOrder
                                        </button>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setPrepareFoodOpen(true);
                                            }
                                        }}>
                                            PrepareFood
                                        </button>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setNotifyRiderOpen(true);
                                            }
                                        }}>
                                            NotifyRider
                                        </button>
                                    </div>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px"}}>
                                    <Link to="/orderManagement/orders"
                                        className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px", marginRight: "9%"}}>
                                    <button
                                        onClick={deleteList}
                                        className="btn btn_blue_h46 w_100">삭제
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 게시판 상세보기 --> */}
                        <div>
                            <Dialog open={acceptOrderopen} onClose={() => setAcceptOrderOpen(false)}>
                                <DialogTitle>AcceptOrder</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="orderId"
                                        label="OrderId"
                                        type="text"
                                        fullWidth
                                        value={entity}
                                        onChange={(e) => setEntity(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setAcceptOrderOpen(false)} className="btn btn_blue_h46 w_100">
                                        Cancel
                                    </button>
                                    <button onClick={acceptOrder} className="btn btn_blue_h46 w_100">
                                    AcceptOrder
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog open={rejectOrderopen} onClose={() => setRejectOrderOpen(false)}>
                                <DialogTitle>RejectOrder</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="orderId"
                                        label="OrderId"
                                        type="text"
                                        fullWidth
                                        value={entity}
                                        onChange={(e) => setEntity(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setRejectOrderOpen(false)} className="btn btn_blue_h46 w_100">
                                        Cancel
                                    </button>
                                    <button onClick={rejectOrder} className="btn btn_blue_h46 w_100">
                                    RejectOrder
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog open={prepareFoodopen} onClose={() => setPrepareFoodOpen(false)}>
                                <DialogTitle>PrepareFood</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="orderId"
                                        label="OrderId"
                                        type="text"
                                        fullWidth
                                        value={entity}
                                        onChange={(e) => setEntity(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setPrepareFoodOpen(false)} className="btn btn_blue_h46 w_100">
                                        Cancel
                                    </button>
                                    <button onClick={prepareFood} className="btn btn_blue_h46 w_100">
                                    PrepareFood
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog open={notifyRideropen} onClose={() => setNotifyRiderOpen(false)}>
                                <DialogTitle>NotifyRider</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="orderId"
                                        label="OrderId"
                                        type="text"
                                        fullWidth
                                        value={entity}
                                        onChange={(e) => setEntity(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setNotifyRiderOpen(false)} className="btn btn_blue_h46 w_100">
                                        Cancel
                                    </button>
                                    <button onClick={notifyRider} className="btn btn_blue_h46 w_100">
                                    NotifyRider
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EgovNoticeDetail;


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

    const [open, setOpen] = useState(false);
    const condition = true; 

    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/orders/orderId`;
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
                                <div className="tit">[object Object]</div>
                                <div className="info">
                                    <dl>
                                    
                                        <dt>class466S</dt>
                                        <dd>{boardDetail && boardDetail.class466S }</dd>
                                    
                                    </dl>
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    <div style={{marginTop: "5px"}}>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setOpen(true);
                                            }
                                        }}>
                                            AcceptOrder
                                        </button>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setOpen(true);
                                            }
                                        }}>
                                            RejectOrder
                                        </button>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setOpen(true);
                                            }
                                        }}>
                                            PrepareFood
                                        </button>
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            setOpen(true);
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
                                <div className="right_col btn1" style={{marginTop: "5px", marginRight: "11%"}}>
                                    <button
                                        onClick={deleteList}
                                        className="btn btn_blue_h46 w_100">삭제
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 게시판 상세보기 --> */}
                        {/* <div>
                            <Dialog open={open} onClose={() => setOpen(false)}>
                                <DialogTitle>AcceptOrder</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="orderId"
                                        label="OrderId"
                                        type="text"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setOpen(false)} className="btn btn_blue_h46 w_100">
                                        Cancel
                                    </button>
                                    <button onClick={acceptOrder} className="btn btn_blue_h46 w_100">
                                    AcceptOrder
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog open={open} onClose={() => setOpen(false)}>
                                <DialogTitle>AcceptOrder</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="orderId"
                                        label="OrderId"
                                        type="text"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setOpen(false)} className="btn btn_blue_h46 w_100">
                                        Cancel
                                    </button>
                                    <button onClick={acceptOrder} className="btn btn_blue_h46 w_100">
                                    RejectOrder
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog open={open} onClose={() => setOpen(false)}>
                                <DialogTitle>AcceptOrder</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="orderId"
                                        label="OrderId"
                                        type="text"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setOpen(false)} className="btn btn_blue_h46 w_100">
                                        Cancel
                                    </button>
                                    <button onClick={acceptOrder} className="btn btn_blue_h46 w_100">
                                    PrepareFood
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div>
                            <Dialog open={open} onClose={() => setOpen(false)}>
                                <DialogTitle>AcceptOrder</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="orderId"
                                        label="OrderId"
                                        type="text"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => setOpen(false)} className="btn btn_blue_h46 w_100">
                                        Cancel
                                    </button>
                                    <button onClick={acceptOrder} className="btn btn_blue_h46 w_100">
                                    NotifyRider
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div> */}
                        
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EgovNoticeDetail;

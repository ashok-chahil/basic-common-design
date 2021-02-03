import React, {Component} from "react"
// import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render(){
        return(
            <div className="App">
                <div className="row pl-5 pr-5 pt-3 justify-content-center">
                    <div className="col-md-12 d-flex">
                        <div className="col-md-6">
                            <h3 className="d-flex justify-content-start" style={{marginLeft:"165px"}}>
                                Checkbox
                            </h3>
                            <div className="" style={{display:"flex", justifyContent:"flex-end"}}>
                                <Card className="pr-3 pl-4 pt-4 pb-5 common-card-design checkbox-card-dimension" style={{backgroundColor:"rgb(171 166 166 / 24%)", borderRadius: "15px" }}>
                                    <div className="d-flex mt-2">
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                        <Radio color="primary" />
                                        <Switch color="primary"
                                            disableRipple
                                        />
                                        &nbsp; &nbsp; &nbsp;
                                        <span className="mt-2 text-style">Inactive Checkbox</span>
                                    </div>
                                    <div className="d-flex mt-2" style={{marginTop:"2px"}}>
                                        <Checkbox
                                            disabled
                                            checked
                                            inputProps={{ 'aria-label': 'disabled checked checkbox' }}
                                        />
                                        <Radio 
                                            color="primary" 
                                            disabled
                                            checked
                                        />
                                        <Switch color="primary"
                                            disableRipple
                                            disabled
                                            checked
                                        />
                                        &nbsp; &nbsp; &nbsp;
                                        <span className="mt-2 text-style">Disabled Checkbox</span>
                                    </div>
                                    <div className="d-flex mt-2" style={{marginTop:"2px"}}>
                                        <Checkbox
                                            defaultChecked
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                        <Radio color="primary" defaultChecked/>
                                        <Switch color="primary"
                                            disableRipple
                                            defaultChecked
                                        />
                                        &nbsp; &nbsp; &nbsp;
                                        <span className="mt-2 text-style">Active Checkbox</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="d-flex">
                                Button
                            </h3>
                            <div className="d-flex justify-content-start">
                                <Card className="pr-3 pl-4 pt-4 pb-5 common-card-design button-card-dimension" style={{backgroundColor:"rgb(171 166 166 / 24%)", borderRadius: "15px" }}>
                                    <div className="" style={{marginTop:"2px"}}>
                                        <div className="d-flex">
                                            <Button className="button-box-shadow" style={{borderRadius:"10px", width:"106px"}} >
                                                Click Me!
                                            </Button>
                                            &nbsp; &nbsp; &nbsp;
                                            <span className="mt-2 text-style">Normal State</span>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <Button className="button-box-shadow" style={{borderRadius:"10px", width:"106px"}} variant="outlined" color="primary">
                                                Click Me!
                                            </Button>
                                            &nbsp; &nbsp; &nbsp;
                                            <span className="mt-2 text-style">Focused State</span>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <Button className="button-box-shadow" style={{borderRadius:"10px", width:"106px", backgroundColor: "rgba(0, 0, 0, 0.12)"}} variant="outlined" color="">
                                                Click Me!
                                            </Button>
                                            &nbsp; &nbsp; &nbsp;
                                            <span className="mt-2 text-style">Pressed State</span>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <Button className="button-box-shadow" style={{borderRadius:"10px", width:"106px", color:"#ffffff"}} variant="outlined" disabled>
                                                Click Me!
                                            </Button>
                                            &nbsp; &nbsp; &nbsp;
                                            <span className="mt-2 text-style">Disabled State</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex" style={{marginTop:"-65px"}}>
                        <div className="col-md-6">
                            <h3 className="d-flex justify-content-start" style={{marginLeft:"165px"}}>
                                Textfield
                            </h3>
                            <div className="" style={{display:"flex", justifyContent:"flex-end"}}>
                                <Card className="pr-4 pl-4 pt-4 pb-5 common-card-design checkbox-card-dimension" style={{backgroundColor:"rgb(171 166 166 / 24%)", borderRadius: "15px" }}>
                                    <div style={{marginTop:"2px"}}>
                                        <div className="ml-3 mb-1 text-style">Normal State</div>
                                        <div className="button-box-shadow" style={{borderRadius:"30px"}}>
                                            <input class="form-control" type="text" placeholder="Click Me!" style={{borderRadius:"30px", backgroundColor:"rgba(171, 166, 166, 0.24)"}} />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="ml-3 mb-1 text-style">Focused State</div>
                                        <div className="button-box-shadow" style={{borderRadius:"30px"}}>
                                            <input class="form-control" type="text" placeholder="Click Me!" style={{borderRadius:"30px", backgroundColor:"rgba(171, 166, 166, 0.24)"}} />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
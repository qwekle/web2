import Authorization from "./components/Authorization";
import PersonalCabinet from "./components/PersonalCabinet";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import CreateDoc from "./components/CreateDoc";
import {useSelector} from "react-redux";
import Document from "./components/Document";

function App() {
    const loginInfo = useSelector(({loginReducer}) => loginReducer);
    return (
        <div className="wrapper">
            <Router>
                <Route path={'/'} exact>
                    {
                        !loginInfo.joined
                            ?
                            <Authorization/>
                            :
                            <PersonalCabinet phoneNumber={loginInfo.phoneNumber}/>
                    }
                </Route>
                <Route path={'/createDoc'}>
                    <CreateDoc phoneNumber={loginInfo.phoneNumber}/>
                </Route>
                <Route path={'/document'}>
                    <Document phoneNumber={loginInfo.phoneNumber}/>
                </Route>
            </Router>
        </div>
    );
}

export default App;

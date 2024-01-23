import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLaptop, faLock, faRightLong, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";


export function Login() {

    return (
        <>
            <div class="container-fluid row" style={{ backgroundColor: 'purple' }}>

                <div class="container-fluid row m-4  bg-white">

                    <div class="col-4 m-5 p-5 text-center">

                        <FontAwesomeIcon icon={faLaptop} style={{ height: '100px' }} />
                    </div>
                    <div class='col-4 m-2'>

                        <h1 style={{ textAlign: 'end' }}>Member Login</h1>
                        <div class='p-4 m-2 text-end'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="text" placeholder="Email" style={{ background: 'center' }} /><br></br>
                        </div >
                        <div class='p-4 m-2 text-end'>
                            <FontAwesomeIcon icon={faLock} /><input type="password" placeholder="password" /><br>
                            </br>
                        </div>
                        <div class=' p-4 m-2 text-end'>
                            <button style={{ backgroundColor: "green", color: 'whitesmoke' }}>Login</button>
                            <p>Forgot</p><a style={{ color: 'green' }} href="https://workspace.google.com/intl/en_in/lp/gmail-in/?utm_source=bing&utm_medium=cpc&utm_campaign=1605214-Workspace-APAC-IN-en-BKWS-EXA-Gmail&utm_content=text-ad-none-none-DEV_c-CRE_-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt_Gmail_Create_1-KWID_43700072096389610-kwd-75523112826076:loc-90&userloc_155608-network_o&utm_term=KW_create%20gmail%20account&gclid=f9414c3c679717f07f94294acd1efee9&gclsrc=3p.ds">Username/Password?</a><br></br>
                            <a style={{ color: 'green' }} href="https://workspace.google.com/intl/en_in/lp/gmail-in/?utm_source=bing&utm_medium=cpc&utm_campaign=1605214-Workspace-APAC-IN-en-BKWS-EXA-Gmail&utm_content=text-ad-none-none-DEV_c-CRE_-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt_Gmail_Create_1-KWID_43700072096389610-kwd-75523112826076:loc-90&userloc_155608-network_o&utm_term=KW_create%20gmail%20account&gclid=f9414c3c679717f07f94294acd1efee9&gclsrc=3p.ds">Create your Account<FontAwesomeIcon icon={faRightLong} /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
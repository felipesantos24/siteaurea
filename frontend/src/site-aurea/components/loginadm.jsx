import React from "react"
import "./loginadm.scss"


export default function Loginadm(){
return(

<div className="todossss"> 
<div className="gfd">
<img src="logopng.png" alt="" /></div>
<div className="login">
<div className="email">
<p className="textologinemail">EMAIL</p>

<input className='inputss' placeholder='exemplo@emai.com'></input>
</div>
<div className="senha"> 
<p className="textologin">SENHA</p>
<input className='inputssss' placeholder='Exemplo@123 '></input>
</div>
</div>
<div className="enter">
<p className="enterlogin">colocar link enter dps</p>
</div>

</div>

);
}
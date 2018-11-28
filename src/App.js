import React from 'react';
import Ajax from './utils/ajax'
import './assets/main.css'

export default (props)=>{
	const proxyReq=async ()=>{
		let result=await Ajax.post('/api/post',{params:{name:'花花',age:18}})
		console.info(result)
		console.info(123)
	}
	return(
		<div>
			<h1>Hello React! {props.name}</h1>
			<button style={{background:'red'}} onClick={proxyReq}>代理请求</button>
			<br/>
			<img style={{width:600}} src={require('./assets/p.jpg')} />
		</div>
	)
}



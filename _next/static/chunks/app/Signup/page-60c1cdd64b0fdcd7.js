(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{3535:function(e,a,r){Promise.resolve().then(r.bind(r,1265))},6638:function(e,a,r){"use strict";r.d(a,{BA:function(){return g},Cg:function(){return d},Kb:function(){return x},SA:function(){return l},XA:function(){return u},qQ:function(){return p},x4:function(){return o},zT:function(){return i}});var n=r(5720),s=r(9222);let t={loading:!1,user:null,error:null,isSuccess:"",status:"idle",employees:[]},l=(0,n.hg)("user/signupUser",async e=>{try{let a=await s.Z.post("http://localhost:3000/user/signup",e);return a.data}catch(e){throw e}}),o=(0,n.hg)("user/loginuser",async e=>{try{let a=await s.Z.post("http://localhost:3000/user/login",e);if(console.log("sourav ",a),console.log("sourav2",a.data),""!==a)return localStorage.setItem("userData",JSON.stringify(a.data)),a.data;console.log("User not found")}catch(e){throw e}}),i=(0,n.hg)("user/employe",async e=>{try{let a=await s.Z.post("http://localhost:3000/employe/Add",e);return a.data}catch(e){throw e}}),d=(0,n.hg)("employees/deleteEmployeeById",async e=>{try{let a=await s.Z.delete("http://localhost:3000/employe/".concat(e));return a.data}catch(e){throw e}}),u=(0,n.hg)("employees/getAllEmployees",async()=>{let e=await fetch("http://localhost:3000/employe/allemploye"),a=await e.json();return a}),c=(0,n.oM)({name:"user",initialState:t,reducers:{},extraReducers:e=>{e.addCase(l.pending,e=>{e.loading=!0,e.error=null}),e.addCase(l.fulfilled,(e,a)=>{e.loading=!1,e.user=a.payload,e.isSuccess="Success"}),e.addCase(l.rejected,(e,a)=>{e.loading=!1,e.error=a.error.message})}}),m=(0,n.oM)({name:"employe",initialState:t,reducers:{},extraReducers:e=>{e.addCase(i.pending,e=>{e.loading=!0,e.error=null}),e.addCase(i.fulfilled,(e,a)=>{e.loading=!1,e.user=a.payload,e.isSuccess="Success"}),e.addCase(i.rejected,(e,a)=>{e.loading=!1,e.error=a.error.message})}}),h=(0,n.oM)({name:"employees",initialState:t,reducers:{},extraReducers:e=>{e.addCase(u.pending,e=>{e.loading=!0,e.error=null}),e.addCase(u.fulfilled,(e,a)=>{e.loading=!1,e.employees=a.payload,e.isSuccess="Success"}),e.addCase(u.rejected,(e,a)=>{e.loading=!1,e.error=a.error.message})}}),{reducer:p}=c,{reducer:g}=m,{reducer:x}=h},1265:function(e,a,r){"use strict";r.r(a);var n=r(7437),s=r(2265),t=r(3283),l=r(9050),o=r(3857),i=r(1975),d=r(7),u=r(1469),c=r(8874),m=r(9227),h=r(6531),p=r(3226),g=r(8938),x=r(1060),f=r(8595),y=r(6820),j=r.n(y),C=r(1396),Z=r.n(C),w=r(3198),S=r(6638),b=r(94);a.default=()=>{let[e,a]=(0,s.useState)({firstname:"",lastname:"",email:"",password:"",allowExtraEmails:!1}),r=(0,w.I0)(),y=(0,b.useRouter)(),[C,v]=(0,s.useState)({}),handleChange=r=>{let{name:n,value:s,type:t,checked:l}=r.target;a({...e,[n]:"checkbox"===t?l:s}),s&&v({...C,[n]:!1})};return(0,n.jsx)(x.Z,{theme:(0,f.Z)(),children:(0,n.jsxs)(g.Z,{component:"main",maxWidth:"xs",children:[(0,n.jsx)(o.ZP,{}),(0,n.jsxs)(m.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(t.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,n.jsx)(h.Z,{})}),(0,n.jsx)(p.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,n.jsxs)(m.Z,{component:"form",noValidate:!0,sx:{mt:3},onSubmit:a=>{a.preventDefault();let n={},s=!1;for(let a in e)""===e[a]?(n[a]=!0,s=!0):n[a]=!1;v(n),s?j().fire("fill your All input Filds "):(console.log(" Data:",e),r((0,S.SA)(e)),y.push("/login"))},children:[(0,n.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(i.Z,{autoComplete:"given-name",name:"firstname",required:!0,fullWidth:!0,id:"firstname",label:"First Name",autoFocus:!0,onChange:handleChange,error:C.firstname,helperText:C.firstname?"First Name is required":""})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(i.Z,{required:!0,fullWidth:!0,id:"lastname",label:"Last Name",name:"lastname",autoComplete:"family-name",onChange:handleChange,error:C.lastname,helperText:C.lastname?"last Name is required":""})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(i.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:handleChange,error:C.email,helperText:C.email?"email is required":""})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(i.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",onChange:handleChange,error:C.password,helperText:C.password?"password is required":""})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(d.Z,{control:(0,n.jsx)(u.Z,{name:"allowExtraEmails",color:"primary",onChange:handleChange}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),(0,n.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,n.jsx)(c.ZP,{container:!0,justifyContent:"flex-end",children:(0,n.jsx)(c.ZP,{item:!0,children:(0,n.jsx)(Z(),{href:"/login",children:"Already have an account? Sign in"})})})]})]})]})})}}},function(e){e.O(0,[77,965,666,340,971,472,744],function(){return e(e.s=3535)}),_N_E=e.O()}]);
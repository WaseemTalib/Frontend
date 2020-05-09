(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var l=a(1),r=a(2),n=a(4),i=a(3),s=a(5),o=a(0),c=a.n(o),m=a(28),d=a.n(m),p=(a(56),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={text:"",isImg:!1,selectedImage:"",step:1,topicId:""},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"submitHandler",value:function(e){e.preventDefault();var t=this.props.profile,a=this.state,l=a.text,r={topicId:a.topicId,postedBy:t._id,feed:l};this.setState({text:"",isImg:!1,selectedImage:"",step:1,topicId:""}),this.props.submit(r)}},{key:"handleImagePreview",value:function(e){e.target.files&&e.target.files[0]&&("image/x-png"!==e.target.files[0].type&&"image/png"!==e.target.files[0].type&&"image/gif"!==e.target.files[0].type&&"image/jpg"!==e.target.files[0].type&&"image/jpeg"!==e.target.files[0].type||this.setState({selectedImage:URL.createObjectURL(e.target.files[0]),isImg:!0}))}},{key:"renderStep1",value:function(e){var t=this,a=this.state,l=a.text,r=a.selectedImage,n=a.isImg;return c.a.createElement("div",{className:"modal-body",style:{maxHeight:"70vh",overflow:"auto"}},c.a.createElement("div",{className:"col-12",style:{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer"},"data-toggle":"modal","data-target":"#postMod"},c.a.createElement("img",{src:e.image?e.image:d.a,alt:"user",style:{width:"40px",height:"40px",borderRadius:"1000px"}}),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("h6",{className:"ml-3",style:{fontWeight:"600",fontSize:"16px"}},e.name))),c.a.createElement("div",{className:"col-12 mt-4"},c.a.createElement("textarea",{className:"post-comm",value:l,autoFocus:!0,placeholder:"What do you want to talk about?",onChange:function(e){return t.setState({text:e.target.value})}}),n&&c.a.createElement("img",{src:r,alt:"selected",style:{width:"100%",height:"300px"}}),c.a.createElement("div",{className:"col-12 p-0 d-flex flex-row justify-content-end"},!n&&c.a.createElement("label",{className:"btn btn-primary p-1",style:{width:"40px",height:"40px",borderRadius:"1000px",display:"flex",alignItems:"center",justifyContent:"center"}},c.a.createElement("i",{className:"fa fa-camera","aria-hidden":"true"}),c.a.createElement("input",{type:"file",accept:"image/x-png,image/png,image/gif,image/jpeg,image/jpg",onChange:function(e){return t.handleImagePreview(e)},style:{display:"none"}})))))}},{key:"renderList",value:function(){var e=this,t=this.props.list;return t&&t.length>0&&t.map((function(t){return c.a.createElement("div",{key:t._id,style:{textDecoration:"none",width:"fit-content",color:"black"},className:"col-lg-6 col-12 d-flex flex-row align-items-center pt-2 pb-2",to:""},c.a.createElement("img",{src:t.image,alt:"topic",style:{width:"50px",height:"50px",borderRadius:"1000px",marginRight:"16px"}}),c.a.createElement("h6",{style:{fontWeight:"400",color:"grey",fontSize:"14px",cursor:"pointer"},onClick:function(a){return e.setState({topicId:t._id})}},t.name))}))}},{key:"renderListFiltered",value:function(e){var t=this,a=this.props.list;return a&&a.length>0&&a.map((function(a){return e===a._id&&c.a.createElement("div",{key:a._id,style:{textDecoration:"none",width:"fit-content",color:"black"},className:"col-12 d-flex flex-row align-items-center pt-2 pb-2",to:""},c.a.createElement("img",{src:a.image,alt:"topic",style:{width:"50px",height:"50px",borderRadius:"1000px",marginRight:"16px"}}),c.a.createElement("h6",{style:{fontWeight:"400",color:"grey",fontSize:"14px",cursor:"pointer",marginTop:"8px"},onClick:function(e){return t.setState({topicId:""})}},a.name," ",c.a.createElement("span",{className:"fa fa-times ml-1"})))}))}},{key:"renderStep2",value:function(){var e=this.state.topicId;return c.a.createElement("div",{className:"modal-body",style:{maxHeight:"70vh",overflow:"auto"}},c.a.createElement("h6",{style:{fontWeight:"600",fontSize:"16px"}},"Select Topic"),c.a.createElement("div",{className:"col-12 d-flex flex-row flex-wrap"},""===e?this.renderList():this.renderListFiltered(e)))}},{key:"render",value:function(){var e=this,t=this.props.profile,a=this.state.step;return c.a.createElement("form",{className:"col-12 p-0 ask-something",style:{borderRadius:"5px",display:"flex",flexDirection:"column",marginBottom:"30px",backgroundColor:"#faf9f9",alignItems:"center"},onSubmit:function(t){return e.submitHandler(t)}},c.a.createElement("div",{className:"col-12 pt-3 pb-2 pl-4",style:{borderRadius:"5px",backgroundColor:"#f3f5f6",borderBottom:"1px solid #dddfe2"}},c.a.createElement("h6",{style:{fontSize:"16px",fontWeight:"600",color:"grey"}},"Ask Somthing")),c.a.createElement("div",{className:"col-12 p-4",style:{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer"},"data-toggle":"modal","data-target":"#postMod"},c.a.createElement("img",{src:t.image?t.image:d.a,alt:"user",style:{width:"40px",height:"40px",borderRadius:"50px"}}),c.a.createElement("h6",{className:"ml-3",style:{fontWeight:"600",fontSize:"15px",color:"grey"}},"Hi ",t.name," ! What is on your mind?")),c.a.createElement("div",{className:"modal fade",id:"postMod",tabIndex:"-1",role:"dialog","aria-labelledby":"Post","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header bg-danger",style:{color:"white"}},c.a.createElement("h5",{className:"modal-title"},"Create post"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{className:"fa fa-times",style:{color:"white"}}))),1===a&&this.renderStep1(t),2===a&&this.renderStep2(t),c.a.createElement("div",{className:"modal-footer"},1===a&&c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(t){return e.setState({step:2})}},"Next ",c.a.createElement("span",{className:"fa fa-arrow-right ml-2"})),2===a&&c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(t){return e.setState({step:1})}},"Back ",c.a.createElement("span",{className:"fa fa-arrow-left ml-2"})),2===a&&c.a.createElement("button",{type:"button","data-dismiss":"modal","aria-label":"Close",className:"btn btn-primary",onClick:function(t){return e.submitHandler(t)}}," Post ",c.a.createElement("span",{className:"fa fa-send ml-2"})))))))}}]),t}(o.Component))}}]);
//# sourceMappingURL=0.a76ce1ac.chunk.js.map
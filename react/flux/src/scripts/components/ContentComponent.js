//主要内容：ref在以后的发展中可能需要通过函数的方式去使用ref
var React = require('react')

var ContentComponent = React.createClass({
    handleClick:function(){
        this.div.style.background="blue"
    },
	render:function(){
		return (
			<div className="content">
                <div onClick={this.handleClick} className="content-block" ref={(div)=>{this.div=div}}>这里是content</div>
            </div>
		)
	}
})

module.exports=ContentComponent
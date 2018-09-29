import React from 'react'
import {connect} from 'react-redux'
import {fetchMenusRequest} from '../Redux/Actions/NavActions'
import Nav from '../Components/Public/Nav'
const mapStateToProps = (state)=>{
    return{
        menuList:state.menuList
    }
}
export default connect(mapStateToProps,{
    fetchMenusRequest
})(Nav)
import React from 'react';


class Searchbar extends React.Component{
    state = { searchTerm : ''}; 
    onSubmitForm = event=>{
        event.preventDefault();
    }

    render(){
        return(
           <div className = "search-bar ui segment">
               <form className ="ui form" onSumbit = {this.onSubmitForm}>
                   <div classNAME ="field">
                       <label>Video Search</label>
                    <input type ="text" onChange = { e => this.setState({searchTerm:e.target.value})} value = {this.state.searchTerm} />
                   </div>
               </form>
           </div>
        )
    }
}

export default Searchbar;
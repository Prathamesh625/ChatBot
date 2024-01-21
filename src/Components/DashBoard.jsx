
import "../Styles/DashBoard.css"
import SideBar from "./SideBar";
function DashBoard() {
    return (
        <section className="display-flex">
<SideBar/>
            <section className="dashboard-container-space">
                
    <div className="flex-dashboard-items">
         <DashBoardBox items="number of users:2"/>
        <DashBoardBox items="number of documents:2 " />
    </div>    </section>   </section>);
}

function DashBoardBox({items}) {
    return (
    <div className="flex-dashboard-box">
    {items}
    </div> );
}



export default DashBoard;

function Tabs(props) {

  return (
    <ul className="todoList_tab">
    <li><a href="/#" className="active">全部</a></li>
    <li><a href="/#">待完成</a></li>
    <li><a href="/#">已完成</a></li>
  </ul>
  );
}
export default Tabs
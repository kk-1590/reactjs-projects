import Tabs from "./tabs"

const TabTest = () => {

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }

    const tabs = [
        {
            label:'Tab 1',
            content : <div>Content for Tab 1</div>
        },
        {
            label:'Tab 2',
            content : <div>Content for Tab 2</div>
        },
        {
            label:'Tab 3',
            content : <div>Content for Tab 3</div>
        }
    ]

  return (
    <Tabs tabsContent={tabs} onChange={handleChange}/>
  )
}

export default TabTest
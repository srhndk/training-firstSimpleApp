import './app-filter.css';

const Appfilter =(props)=> {
    const buttonsData =[
        {name:'all',label: 'Все сотрудники'},
        {name:'star',label: 'На повышение'},
        {name:'moreThen1000',label: 'З/П больше 1000$ '}
    ]; 

    const buttons = buttonsData.map(({name, label})=> {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : "btn-outline-light";
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })
    return(
        //btn-group - встроенный класс в бутстрапе 
        <div className="btn-group">
          {buttons}
        </div>
    );
}

export default Appfilter;
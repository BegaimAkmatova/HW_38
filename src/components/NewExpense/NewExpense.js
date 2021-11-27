import React from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

//it's not a wrapper component
const NewExpense = (props) => {
       // <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} />
    //NewExpense? ExpenseForm ичине данный алып NewExpenseтин ичине сактайбыз и id кошобуздагы аны App.js ке беребиз (и аны render кылып браузерге чыгарат) ExpenseForm болсо input тардан данныйды алып туруп 3 state methot переменныйдын ичине сактап жатат анан SubmitHandler ди чакырабыз ал         <form onSubmit={submitHandler}>боюунча иштейт event аткарылганда.onSubmit аткарылат button до type="submit" бар болсо. submit иштеп кетсе onSubmit submitHandlerди(функция) чакырат,submitHandler ичинде {TODO:e.preventDefault()-анткени форманы басканда перезагрузка иштеп кетпеш учун и баштапкы мааниде (поумолчание) форм озу аткара турган жумушун токтотуп коюуш учун} КИЙИН let data деген бир обьект туздук анын ичинде title: amaunt: date: деген свойство бар дейбиз и title: enteredTitle га барабар дейбиз тоист бул state ке const [enteredTitle,setTitle] = useState(''); а муну болсо const titleChangeHandler = (e) => {
    //    setEnteredTitle(e.target.value);
   // } менен алмаштырганбыз.и ошондой эле amaunt: date:.и далше setTitle('');setAmount('');setDete('');дер формдун значенияларын 0 кылып пустой сапка барабар кылып коюуп жатабыз,и ошол пустой барабар болгон нерсесин биз inputда value деген атрибутту чакырып ошол пустой нерсеге барабар болду деп{enteredTitle} ды беребиз. <input
                      //  id="title"
                       // type="text"
                      //  onChange={titleChangeHandler} //тоист биз onChange менен состояниени озгортуп жатабыз

                      //озгоргон inputту дагы
                       // value={enteredTitle}деп чыгарып жатабыз
                   // />шул жерде two way binding журуп жатат тоист inputка бир нерсе жазып жатабыз ал состояниени озгортуп жатат состояние озгоргондо input дагы value дагы озгоруп жатат ошондо бул ошондо бул (двух сторонной привязка)болуп калды.
   
    //lifting up method
    //создание метод(функция)колбек катары берилсе Handler деген окончаниясы менен болсо жакшы болот,эми <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} /> ExpenseForm га колбек функциябызды берип жатабыз(onSaveExpenseData)а бул озуно props ту алат экен
    const saveExpenseDataHundler = (enteredExpenseData) => {
        console.log(enteredExpenseData);//мени ExpenseForm чакырып жатат бирок мен NewExpense тин ичинде аткарылам,тоист колбек функция кайсы жерде болсо ошол жерде аткарылат ExpenseFormдун ичинде чакырылган себеби expenseData деген обьекти алыш учун гана. 

         const expenseData = {
            ...enteredExpenseData,
            //биз data деген обьектибиз enteredExpenseData болуп келип жатат аны биз spread оператор мн копи кылып алдык анда title:amaunt:date:3свойство бар и обьектибизге дагы бир свойство коштук id 
             id: Math.random().toString(),
             // toString кылабыз.Эми ушул expenseData обьектибизди App.js ке беришибиз керек

        }
 // отправляем данные формы как объект в App.js по мере обновления там нового массива расходов
         props.onAddExpense(expenseData)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} />
    </div>
}

export default NewExpense;

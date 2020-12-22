import React, {useEffect} from 'react'
import getData from '../../manager/networkManager'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../carousel_dir/carousel'
import Scroll_list from '../scroll_list/scroll_list'
import $ from 'jquery'; 

import './Home.css';

const Home = () => {
    const poAtThBoOf = useSelector(state => state.lists_Red.PATBO)
    const prFoThWhFa = useSelector(state => state.lists_Red.PFTWF)
    const prMuHaAtThBoOf = useSelector(state => state.lists_Red.PMHATBO)
    const spPr = useSelector(state => state.lists_Red.SP)
    const ifYoMi = useSelector(state => state.lists_Red.IYM)
    const OuFaOfThWe = useSelector(state => state.lists_Red.OFOTW)
    const dispatch = useDispatch()
    useEffect( () => {
        getData().then((responseArr)=>{
            const myObjStrPET = JSON.stringify(responseArr[0].data.data.contents.data);
            const myObjStrEPTLF = JSON.stringify(responseArr[1].data.data.contents.data);
            const myObjStrEIET = JSON.stringify(responseArr[2].data.data.contents.data);
            const myObjStrEE = JSON.stringify(responseArr[3].data.data.contents.data);
            const myObjStrIYM = JSON.stringify(responseArr[4].data.data.contents.data);
            const myObjStrNPDLS = JSON.stringify(responseArr[5].data.data.contents.data);
            const setPopularAtTheBoxOffice = () => (
                { type: "POPULARATTHEBOXOFFICE", obj: JSON.parse(myObjStrPET) }
            );
            const setPremieresForTheWholeFamily = () => (
                { type: "PREMIERESFORTHEWHOLEFAMILY", obj: JSON.parse(myObjStrEPTLF) }
            );
            const setPremieresMustHaveAtTheBoxOffice = () => (
                { type: "PREMIERESMUSTHAVEATTHEBOXOFFICE", obj: JSON.parse(myObjStrEIET) }
            );
            const setSpanishPremieres = () => (
                { type: "SPANISHPREMIERES", obj: JSON.parse(myObjStrEE) }
            );
            const setIfYouMissed = () => (
                { type: "IFYOUMISSED", obj: JSON.parse(myObjStrIYM) }
            );
            const setOurFavoritesOfTheWeek = () => (
                { type: "OURFAVORITESOFTHEWEEK", obj: JSON.parse(myObjStrNPDLS) }
            );
            dispatch(setPopularAtTheBoxOffice()) 
            dispatch(setPremieresForTheWholeFamily())
            dispatch(setPremieresMustHaveAtTheBoxOffice())
            dispatch(setSpanishPremieres())
            dispatch(setIfYouMissed())
            dispatch(setOurFavoritesOfTheWeek())
            $('.loader-wrapper').hide()
        })
    }, []);
    return (
        <div className="container_home">
            <Carousel images ={poAtThBoOf} />
            <h3 className="title">Populares En Taquilla</h3>
            <Scroll_list id="id1" images ={poAtThBoOf}/>
            <h3 className="title">Estrenos Para Toda La Familia</h3>
            <Scroll_list id="id2" images ={prFoThWhFa}/>
            <h3 className="title">Estrenos Imprescindibles En Taquilla</h3>
            <Scroll_list id="id3" images ={prMuHaAtThBoOf}/>
            <h3 className="title">Estrenos Espanoles</h3>
            <Scroll_list id="id4" images ={spPr}/>
            <h3 className="title">Si Te Perdiste</h3>
            <Scroll_list id="id5" images ={ifYoMi}/>
            <h3 className="title">Nuestras Preferidas De La Semana</h3>
            <Scroll_list id="id6" images ={OuFaOfThWe}/>
        </div>
    )
}

export default Home;
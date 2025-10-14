import react,{useState} from "react";

const GraduateComponent=({data,setData})=>
{
    <div>
        <label>Degree<input type="text" value={data.degree || ''}  onChange={e => setData({ ...data, degree: e.target.value })}></input></label><br/>
        <label>Year<input type="number" value={data.year || ''} onChange={e => setData({ ...data, year: e.target.value })}></input></label><br/>
        <label>Final year score<input type="text" value={data.score ||''} onChange={e => setData({ ...data, score: e.target.value })}></input></label><br/>
        <label>University<input type="text" value={data.university ||''} onChange={e => setData({ ...data, university: e.target.value })}></input></label><br/>
        
        
        
                

    </div>


}

const PGComponent=({data,setData})=>
{
    <div>
        <label> Year <input type="number" value={data.year ||''} onchange={e=>setData({...data,year:e.target.value})}></input></label><br/>
        <label>Thesis Subject<input type="text" value={data.thesis} onchange={e=> setData({...data,thesis:e.target.value})}></input></label><br/>
    </div>
}

const UnderGraduateComponent({data,setData})=>
{
    <div>
    <label>HSC <input type="text" value={data.hsc||''} onchange={e=>setData({...data,hsc:e.target.value})}></input></label><br/>
   <label>SSC <input type="text" value={data.ssc||''} onchange={e=>setData({...data,ssc:e.target.value})}></input></label><br/>
    </div>
}  


import axios from 'axios'
const API=axios.create({baseURL:'http://localhost:3000'})

export const fetchMemories=async()=>await API.get('/api/memories/')
export const fetchMemory=async (id)=>await API.get(`/api/memories/${id}`)
export const createMemory=async (newMemory)=>await API.post('/api/memories/',newMemory)
export const deleteMemory=async (id) =>await API.delete(`/api/memories/${id}`)
export const updateMemory= async (id,UpdatedMemory)=>await API.put(`/api/memories/${id}`,UpdatedMemory)

export const hakkimda=async()=>await API.get('/api/hakkimda/hakkimda/')
export const hakkimdaiki=async (id)=>await API.get(`/api/hakkimda/hakkimda/${id}`)
export const hakkimdaekle=async (formData)=>await API.post('/api/hakkimda/hakkimda/',formData) 
export const hakkimdasil=async (id) =>await API.delete(`/api/hakkimda/hakkimda/${id}`)
export const guncelle=async (id,Hakkinda)=>await API.put(`/api/hakkimda/hakkimda/${id}`,Hakkinda)

export const logo=async()=>await API.get('/api/logo/logo/')
export const logoiki=async (id)=>await API.get(`/api/logo/logo/${id}`)
export const logoekle=async (formData)=>await API.post('/api/logo/logo/',formData) 
export const logosil=async (id) =>await API.delete(`/api/logo/logo/${id}`)
export const logoguncelle=async (id,logo)=>await API.put(`/api/logo/logo/${id}`,logo)



export const yetenek=async()=>await API.get('/api/yetenek/yetenek/')
export const yetenekdetay=async (id)=>await API.get(`/api/yetenek/yetenek/${id}`)
export const yetenekekle=async (formData)=>await API.post('/api/yetenek/yetenek/',formData) 
export const yeteneksil=async (id) =>await API.delete(`/api/yetenek/yetenek/${id}`)
export const yetenekguncelle=async (id,a)=>await API.put(`/api/yetenek/yetenek/${id}`,a)


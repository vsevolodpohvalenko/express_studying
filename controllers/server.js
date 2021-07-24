
let servers = [
    {id: '1', name: 'AWS', status: 'working'},
    {id: '2', name: 'AWS', status: 'working'},
    {id: '3', name: 'AWS', status: 'working'},
    {id: '4', name: 'AWS', status: 'working'},
    {id: '5', name: 'AWS', status: 'working'}
]

export const getAll = (req, res) => {
    res.status(200).json(servers)
}

export const create = (req, res) => {
    console.log(req.body)
    res.status(201).json({})
}

export const remove = (req,res) => {
    console.log('ID', req.params.id)
    servers = servers.filter((e) => e.id !== req.params.id)
    res.json({servers})
}

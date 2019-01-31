const bodyParser = require('body-parser');
const Events = require('../models/event.js');
const router = require('express').Router();

//const controller de event

router.route('/')
    .get((req,res)=> {
        res.send("view all")
    })

router.route('/new')
    .get((req,res)=> {
        res.send("create")
    })

router.route('/update')
    .get((req,res)=> {
        res.send("update")
    })
    
router.route('/delete')
    .get((req,res)=> {
        res.send("delete")
    })

router.route('/view')
    .get((req,res)=> {
        res.send("view one")
    })

module.exports = router;

/*
module.exports = (app, express) => {
    let router = express.Router();

    //GET all
    router.route('/')
    
    .get((req, res) => {
        Events.find({}, (err, events) => {
            if(err)res.send(err);
            res.send(events);
        })
        .sort({'fechaCreacion': -1});
    })

    //POST Crear un nuevo evento
    .post((req, res) => {
        let event = new Events();
        event.nombre = req.body.nombre;
        event.categoria = req.body.categoria;
        event.lugar = req.body.lugar;
        event.direccion = req.body.direccion;
        event.fechaInicio = req.body.fechaInicio;
        event.fechaFin = req.body.fechaFin;
        event.presencial = req.body.presencial;
        event.fechaCreacion = req.body.fechaCreacion;
        event.user = req.body.user;
        
        event.save((err) => {
            if(err) return res.send(err);
            return res.json({message: 'Ha creado un nuevo evento exitosamente!'});
        });
    });

    //http://localhost:8080/events/:id_event
    //GET un evento
    router.route('/:id_event')

    .get((req, res) => {
        Events.findById(req.params.id_event, (err, event) => {
          if (err) res.send(err);
  
          // return that event
          res.send(event);
        });
    })
    //PUT modificar un evento
    .put((req, res) => {
      Events.findById(req.params.id_event,(err, event) => {
        if (err) res.send(err);
        if (req.body.nombre) event.nombre = req.body.nombre;
        if (req.body.categoria) event.categoria = req.body.categoria;
        if (req.body.lugar) event.lugar = req.body.lugar;
        if (req.body.direccion) event.direccion = req.body.direccion;
        if (req.body.fechaInicio) event.fechaInicio = req.body.fechaInicio;
        if (req.body.fechaFin) event.fechaFin = req.body.fechaFin;
        if (req.body.presencial) event.presencial = req.body.presencial;

        event.save((err) => {
          if (err) res.send(err);

          res.json({ message: "Ha actulizado su evento exitosamente" });
        });
      });
    })
    //DELETE eliminar un evento
    .delete((req, res) => {
      Events.remove({
        _id: req.params.id_event
      }, (err, hye) => {
        if (err) res.send(err);

        res.json({ message: "Ha eliminado el evento exitosamente" });
      });
    });
    return router;
}
*/
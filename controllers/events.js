const {Event} = require('../db');


/**
 * Fetch all the events from the database.
 *
 * @param req Request
 * @param res Response
 * @return {Promise.<void>} Nothing
 */
async function getAllEvents(req, res) {
    const events = await Event.findAll();

    res.json(events);
}

/**
 * create an event
 */
async function createEvent(req, res) {
    const data = req.body;

    const newEvent = new Event({
        name: data.name || "nnn",
        category: data.category || "",
        place: data.place || "",
        address: data.address || "",
        initDate: data.initDate || "2016-01-01 00:00:00+00:00",
        endDate: data.endDate || "2018-01-01 00:00:00+00:00",
        type: data.type || false,
    })

    const eventDone = await newEvent.save();

    res.json(eventDone);

}

/**
 * get an event by it id
 */
async function getEventById(req, res){
    const eventId = req.params.id;

    const event = await Event.findById(eventId);

    res.json(event);

}

/**
 * delete an event
 */
async function deleteEvent(req, res){
    const eventId = req.params.id;

    const event = await Event.findById(eventId);
    event.destroy();

    res.json(event);
}

function cleanObject(obj) {
    Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
    return obj;
}


/**
 * update an event
 */
async function updateEvent(req, res){
    const eventId = req.params.id;

    const oldEvent = await Event.findById(eventId);

    const data = req.body;

    await oldEvent.update(cleanObject({
        name: data.name,
        category: data.category,
        place: data.place,
        address: data.address,
        initDate: data.initDate,
        endDate: data.endDate,
        type: data.type,
    }));
    res.json(oldEvent);

}

module.exports = {
    getAllEvents,
    createEvent, 
    deleteEvent,
    updateEvent,
    getEventById
}
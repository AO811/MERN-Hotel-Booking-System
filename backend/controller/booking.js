const express = require("express");
const mongoose = require("mongoose");
const Room = require("../model/bookingSchema");

exports.createRoom = async (req, res, next) => {
    try {
        const { name, email, phone, roomtype, checkindate, checkoutdate, adhaar } = req.body;

        const newRoom = new Room({
            name, email, phone, roomtype, checkindate, checkoutdate, adhaar,
        });
        const savedRoom = await newRoom.save();
        res.status(201).json(savedRoom);
    }
    catch (error) {
        next(error);
    }
};

exports.deleteRoom = async (req, res, next) => {
    try {
        const { roomId } = req.params;

        const deletedRoom = await Room.findByIdAndDelete(roomId);

        if (!deletedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.json({ message: 'Room deleted successfully' });
    } catch (error) {
        next(error);
    }
};

exports.getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        if (!rooms) {
            return res.status(404).json({ message: 'No rooms found' });
        }
        res.status(200).json(rooms);
    } catch (error) {
        next(error);
    }
};

exports.getRoomById = async (req, res, next) => {
    try {
        const { roomId } = req.params;

        const room = await Room.findById(roomId);

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.json(room);
    } catch (error) {
        next(error);
    }
};



exports.updateRoom = async (req, res, next) => {
    try {
        const { roomId } = req.params;
        const { name, email, phone, roomtype, checkindate, checkoutdate, adhaar } = req.body;
        const updatedRoom = await Room.findByIdAndUpdate(
            roomId,
            { name, email, phone, roomtype, checkindate, checkoutdate, adhaar },
            { new: true }
        );
        if (!updatedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json(updatedRoom);
    }
    catch (error) {
        next(error);
    }
}
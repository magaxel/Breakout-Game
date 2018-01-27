/*jslint esversion: 6, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ 
var gamedata = {
    "levels": [
        {
            "id": "1",
            "name": "Bulbasaur",
            "paddle": {
                "height": "30",
                "width": "400",
                "color": "black"
            },
            "ball": {
                "color": "grey",
                "radius": "10"
            },
            "bricks": [
                {
                    "x": "80",
                    "y": "20",
                    "height": "18",
                    "width": "360",
                    "color": "purple",
                    "health": "1"
                },
                {
                    "x": "40",
                    "y": "40",
                    "height": "18",
                    "width": "360",
                    "color": "pink",
                    "health": "1"
                },
                {
                    "x": "60",
                    "y": "60",
                    "height": "18",
                    "width": "360",
                    "color": "green",
                    "health": "1"
                },
                {
                    "x": "80",
                    "y": "80",
                    "height": "18",
                    "width": "360",
                    "color": "red",
                    "health": "1"
                },
                {
                    "x": "100",
                    "y": "100",
                    "height": "18",
                    "width": "360",
                    "color": "yellow",
                    "health": "1"
                },
                {
                    "x": "80",
                    "y": "120",
                    "height": "18",
                    "width": "360",
                    "color": "white",
                    "health": "1"
                }
            ]
        },
        {
            "id": "2",
            "name": "Ivysaur",
            "paddle": {
                "height": "10",
                "width": "1050",
                "color": "blue"
            },
            "ball": {
                "color": "black",
                "radius": "40"
            },
            "bricks": [
                {
                    "x": "5",
                    "y": "70",
                    "height": "10",
                    "width": "460",
                    "color": "yellow",
                    "health": "1"
                },
                {
                    "x": "5",
                    "y": "285",
                    "height": "10",
                    "width": "460",
                    "color": "purple",
                    "health": "1"
                },
                {
                    "x": "300",
                    "y": "20",
                    "height": "265",
                    "width": "10",
                    "color": "green",
                    "health": "1"
                },
                {
                    "x": "70",
                    "y": "20",
                    "height": "265",
                    "width": "10",
                    "color": "red",
                    "health": "1"
                }
            ]
        },
        {
            "id": "3",
            "name": "Ivysaur",
            "paddle": {
                "height": "10",
                "width": "1050",
                "color": "blue"
            },
            "ball": {
                "color": "black",
                "radius": "40"
            },
            "bricks": [
                {
                    "x": "5",
                    "y": "70",
                    "height": "10",
                    "width": "460",
                    "color": "yellow",
                    "health": "1"
                },
                {
                    "x": "5",
                    "y": "285",
                    "height": "10",
                    "width": "460",
                    "color": "purple",
                    "health": "1"
                },
                {
                    "x": "300",
                    "y": "20",
                    "height": "265",
                    "width": "10",
                    "color": "green",
                    "health": "1"
                },
                {
                    "x": "70",
                    "y": "20",
                    "height": "265",
                    "width": "10",
                    "color": "red",
                    "health": "1"
                }
            ]
        }
    ],
    "scoreboard": {
        "font": "16px Arial",
        "color": "#0095DD",
        "x": "8",
        "y": "20",
        "score": "0"
    },
    "lives": {
        "font": "16px Arial",
        "color": "#0095DD",
        "x": "8",
        "y": "20",
        "lives": "3"
    },
    "startLevel": "1",
    "name": "the game"
};
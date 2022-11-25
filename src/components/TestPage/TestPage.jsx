import React from "react";
import './TestPage.css'

const TestPage = ({ test }) => {
    const [object] = test;
    return (
        <div className="test-page-container">
            <div className="test-page-content">
                <div>
                    <h1>{object.cliente}</h1>
                </div>
                <div className="video-transcription-container">
                    <div className="video-container">
                        <iframe src={object.linkVideo}></iframe>
                    </div>
                    <div className="transcription-container">
                        <h2>Transcripción</h2>
                        <div className="transcription-content">
                            <p>{object.transcripcion}</p>
                        </div>
                    </div>
                </div>
                <div className="task-container">
                    <h2>Tareas</h2>
                    <p>Escenario: {object.escenario}</p>
                    <div className="task-content">
                        {object.preguntas.map((task, index) => {
                            return (
                                <div key={index} className='task'>
                                    <p className="task-number">Tarea {index + 1}</p>
                                    <p>{task.texto}</p>
                                    {task.respuesta ===
                                    "respuesta verbal" ? null : (
                                        <span className="task-response">Respuesta: {task.respuesta}</span>
                                    )}
                                    <span>
                                        Duración de la tarea: {task.tiempo}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;

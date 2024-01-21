const SingleCourseLessons = ({lessons}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col lesson-list">
                    {lessons && <h4>{lessons.length} Lessons</h4>}
                    <hr/>
                    <ul className="list-group">
                        {lessons.map((item, index) => (
                            <li key={index} className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <div className="mr-3">
                                        <div className="avatar bg-primary text-white d-flex align-items-center justify-content-center rounded-circle" style={{ width: '30px', height: '30px' }}>
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="lesson-title" style={{ marginLeft: '8px' }}>{item.title}</div>
                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default SingleCourseLessons;

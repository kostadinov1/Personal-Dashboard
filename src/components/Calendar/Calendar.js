

export default function Calendar() {
    return (
        <>
          <link href="css/style.css" rel="stylesheet"></link>
          <link href="css/style-responsive.css" rel="stylesheet"></link>
        
    <section id="main-content">
      <section className="wrapper">
        <h3><i className="fa fa-angle-right"></i> Calendar</h3>
        <div className="row mt">
          <aside className="col-lg-3 mt">
            <h4><i className="fa fa-angle-right"></i> Draggable Events</h4>
            <div id="external-events">
              <div className="external-event label label-theme">My Event 1</div>
              <div className="external-event label label-success">My Event 2</div>
              <div className="external-event label label-info">My Event 3</div>
              <div className="external-event label label-warning">My Event 4</div>
              <div className="external-event label label-danger">My Event 5</div>
              <div className="external-event label label-default">My Event 6</div>
              <div className="external-event label label-theme">My Event 7</div>
              <div className="external-event label label-info">My Event 8</div>
              <div className="external-event label label-success">My Event 9</div>
              <p className="drop-after">
                <input type="checkbox" id="drop-remove"/><span> Remove After Drop</span>
              </p>
            </div>
          </aside>
          <aside className="col-lg-9 mt">
            <section className="panel">
              <div className="panel-body">
                <div id="calendar" className="has-toolbar"></div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </section>


    <script src="lib/calendar-conf-events.js"></script>

        </>
    )
}
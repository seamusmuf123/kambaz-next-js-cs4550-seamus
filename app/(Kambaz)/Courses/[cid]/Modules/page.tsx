export default function Modules() {
  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', margin: '16px 0' }}>
        <button type="button">Collapse All</button>
        <button type="button">View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Unpublish All</option>
        </select>
        <button type="button">+ Module</button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn HTML</li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro to course</li>
                <li className="wd-content-item">Learning HTML</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn BOOTSTRAP</li>
                <li className="wd-content-item">Learn CSS</li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Using BOOTSTRAP</li>
                <li className="wd-content-item">Learning CSS</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn JavaScript</li>
                <li className="wd-content-item">Learn React</li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learning JavaScript</li>
                <li className="wd-content-item">Using React</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}

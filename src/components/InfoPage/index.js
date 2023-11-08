import './index.css'

const InfoPage = props => {
  const {id} = props

  return (
    <div className="bg-side">
      <div className="list-cont">
        <div className="page-cont">
          <div className={id === 1 ? ' highlight page-no' : 'page-no'}>
            <h1>1</h1>
          </div>
          <div className="page-head">
            <h1 className="page-content">
              <span>STEP 1</span>
              <br />
              YOUR INFO
            </h1>
          </div>
        </div>
        <div className="page-cont">
          <div className={id === 2 ? 'highlight page-no' : 'page-no'}>
            <h1>2</h1>
          </div>
          <div className="page-head">
            <h1 className="page-content">
              <span>STEP 2</span>
              <br />
              SELECT PLAN
            </h1>
          </div>
        </div>
        <div className="page-cont">
          <div className={id === 3 ? 'highlight page-no' : 'page-no'}>
            <h1>3</h1>
          </div>
          <div className="page-head">
            <h1 className="page-content">
              <span>STEP 3</span>
              <br />
              ADD-ONS
            </h1>
          </div>
        </div>
        <div className="page-cont">
          <div className={id === 4 ? 'highlight page-no' : 'page-no'}>
            <h1>4</h1>
          </div>
          <div className="page-head">
            <h1 className="page-content">
              <span>STEP 4</span>
              <br />
              SUMMARY
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage

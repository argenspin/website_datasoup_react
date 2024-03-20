import React from "react";
import expense_icon from '../assets/expense_icon.png'
import rental_icon from '../assets/rental_icon.png'


export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container-fluid">
        <div className="col-md-10 col-xs-12 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/sales.svg" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Sales</h3>
            <p>Efficiently manage your sales workflow and track customers seamlessly, from <b>Quotation</b> creation to product <b>Delivery</b> and <b>Invoicing</b> </p>
          </div>

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/purchase.svg" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Purchase</h3>
            <p>Manage purchase <b>orders</b>, track <b>deliveries</b>, and <b>optimize</b> inventory management to enhance procurement efficiency.</p>
          </div>

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/accounting_1.png" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Accounting</h3>
            <p>Essential accounting features including <b>Chart of Accounts</b>, <b>Journals</b>, <b>Payments</b> tracking and <b>Tax</b> reporting, empowering businesses with proper financial <b>tracking</b> and <b>reporting</b> capabilities.</p>
          </div>

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/manufacturing.svg" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Manufacturing</h3>
            <p>Streamline production processes, manage work orders efficiently, <b>track</b> inventory levels in real-time, and <b>optimize</b> resource allocation for enhanced <b>productivity</b> and <b>cost-effectiveness</b></p>
          </div>

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/stock.svg" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Stock Management</h3>
            <p>Efficiently <b>manage</b> inventory levels, <b>track</b> stock movements, <b>optimize</b> warehouse operations, and ensure accurate stock valuations for <b>streamlined</b> supply chain management</p>
          </div>

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/rental.png" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Rental</h3>
            <p>Management of equipment rentals, providing <b>accurate</b> monitoring of equipment usage duration and <b>automated</b> billing. Ensure smooth <b>equipment</b> rental operations and <b>optimizes</b> revenue generation</p>
          </div>

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/employees.svg" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Emloyees Management</h3>
            <p>Simplify employee <b>data</b> management, facilitating <b>smooth</b> onboarding, <b>accurate</b> record-keeping, <b>performance</b> tracking, and effective <b>communication</b> for streamlined workforce management</p>
          </div>

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/expense.png" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Expense Tracking</h3>
            <p>Efficiently track all <b>operational</b> expenses for your company, including <b>fuel</b>, <b>utility</b> bills, building <b>rents</b>, and more, ensuring accurate financial <b>tracking</b> and <b>organized</b> expense management.</p>
          </div>

          <div className="col-xs-6 col-md-4" style={{'height':300}}>
            {" "}
            {/* <i className={d.icon}></i> */}
            <img src="img/features/project.svg" style={{ 'width': 100, "-webkit-filter": "drop-shadow(5px 5px 5px #666666)", "filter": "drop-shadow(5px 5px 5px #666666)", "border-radius": 5 }} />
            <h3>Project Management</h3>
            <p>Facilitates seamless project <b>planning</b>, task delegation, <b>progress</b> tracking, and <b>collaboration</b>, enabling efficient project <b>execution</b> and successful <b>delivery</b></p>
          </div>

          <div className="d-md-none col-xs-6">

          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import UpdatingImg from '../../../assets/images/updating.png';
import MapImg from '../../../assets/images/map.png';
import Table from '../../Table';

const OurLatestDeals = () => {
    const [ourLatestDealsStatus, setOurLatestDealsStatus] = useState("Closed");

    const tableContentOngoing = 
        {
            table1 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Devanahalli, Bangalore'
                },
                {
                    key: 'Area',
                    value: '180 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'Within 100 meters - Godrej Reserve (100 acres layout); Century (60 acre layout)'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Sumadhura Group, Vasavi Group, Harsha'
                }],
            table2 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Devanahalli, Bangalore'
                },
                {
                    key: 'Area',
                    value: '40 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'JV deal with Ramky group for premium villa project'
                },
                {
                    key: 'Deal Type',
                    value: 'JV'
                },
                {
                    key: 'Client',
                    value: 'Ramky Group'
                }],
            table3 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Doddaballapura'
                },
                {
                    key: 'Area',
                    value: '40 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'For Layout Development within Panchayat Limits'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Nambiyar Group'
                }],
            table4 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Hoskote, Bangalore'
                },
                {
                    key: 'Area',
                    value: '90 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'AECS Layout is within premises, its on Bangalore highway'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Peram Group'
                }]
        }
        

    const tableContentClosed =
        {
            table1 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Hoskote, Bangalore'
                },
                {
                    key: 'Area',
                    value: '90 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'AECS Layout is within premises, its on Bangalore highway'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Peram Group'
                }],
            table2 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Hoskote, Bangalore'
                },
                {
                    key: 'Area',
                    value: '32 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'Layout is very close to Hoskote Junction, within BBMP Limits'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Peram Group'
                }],
            table3 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Doddaballapura'
                },
                {
                    key: 'Area',
                    value: '40 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'For Layout Development within Panchayat Limits'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Nambiyar Group'
                }],
            table4 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Hoskote, Bangalore'
                },
                {
                    key: 'Area',
                    value: '90 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'AECS Layout is within premises, its on Bangalore highway'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Peram Group'
                }],
            table5 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Doddaballapura'
                },
                {
                    key: 'Area',
                    value: '40 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'For Layout Development within Panchayat Limits'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Nambiyar Group'
                }],
            table6 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Hoskote, Bangalore'
                },
                {
                    key: 'Area',
                    value: '90 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'AECS Layout is within premises, its on Bangalore highway'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Peram Group'
                }],
            table7 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Doddaballapura'
                },
                {
                    key: 'Area',
                    value: '40 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'For Layout Development within Panchayat Limits'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Nambiyar Group'
                }],
            table8 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Hoskote, Bangalore'
                },
                {
                    key: 'Area',
                    value: '90 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'AECS Layout is within premises, its on Bangalore highway'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Peram Group'
                }],
            table9 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Doddaballapura'
                },
                {
                    key: 'Area',
                    value: '40 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'For Layout Development within Panchayat Limits'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Nambiyar Group'
                }],
            table10 :[ 
                {
                    key: 'Zone',
                    value: 'North Bangalore'
                },
                {
                    key: 'Location',
                    value: 'Hoskote, Bangalore'
                },
                {
                    key: 'Area',
                    value: '90 Acres'
                },
                {
                    key: 'Special Features',
                    value: 'AECS Layout is within premises, its on Bangalore highway'
                },
                {
                    key: 'Deal Type',
                    value: 'Resale'
                },
                {
                    key: 'Client',
                    value: 'Peram Group'
                }]
        }

  return (
    <div className='ourLatestDeals-container'>
        <div className="ourLatestDeals-headings">
            <h1>OUR LATEST DEALS</h1>
        </div>
        <div className="ourLatestDeals-content">
        <div className="ourLatestDeals-options">
            <span onClick={()=>setOurLatestDealsStatus("Ongoing")} style={ourLatestDealsStatus === "Ongoing" ? {borderBottom: "3px solid #0D3C35",color: "#0D3C35"} : {}}  className="ourLatestDeals-option-button">Ongoing</span>
            <span onClick={()=>setOurLatestDealsStatus("Closed")} style={ourLatestDealsStatus === "Closed" ? {borderBottom: "3px solid #0D3C35",color: "#0D3C35"} : {}} className="ourLatestDeals-option-button">Closed</span>
        </div>
        <div className="ourLatestDeals-slider-contents-container">
            {/* Ongoing */}
            {ourLatestDealsStatus === "Ongoing" && 
                          <Carousel variant="dark">
                          <Carousel.Item>
                              <div className="ourLatestDeals-slider-content">
                                  <div className="ourLatestDeals-slider-content-left-section">
                                      <Table tableContent={tableContentOngoing.table1} />
                                  </div>
                                  <div className="ourLatestDeals-slider-content-right-section">
                                  <div className="ourLatestDeals-slider-content-image-container">
                                          <img src={MapImg} alt="updating img" />
                                      </div>
                                  </div>
                              </div>
                          </Carousel.Item>
                          <Carousel.Item>
                                  <div className="ourLatestDeals-slider-content">
                                  <div className="ourLatestDeals-slider-content-left-section">
                                      <Table tableContent={tableContentOngoing.table2} />
                                  </div>
                                  <div className="ourLatestDeals-slider-content-right-section">
                                      <Table tableContent={tableContentOngoing.table3} />
                                  </div>
                                  </div>
                          </Carousel.Item>
                          <Carousel.Item>
                          <div className="ourLatestDeals-slider-content">
                                  <div className="ourLatestDeals-slider-content-left-section">
                                      <Table tableContent={tableContentOngoing.table4} />
                                  </div>
                                  <div className="ourLatestDeals-slider-content-right-section">
                                      <div className="ourLatestDeals-slider-content-image-container">
                                          <img src={UpdatingImg} alt="updating img" />
                                      </div>
                                  </div>
                              </div>
                          </Carousel.Item>
                      </Carousel>    
            }
            {/* Closed */}
            {ourLatestDealsStatus === "Closed" && 
                            <Carousel variant="dark">
                            <Carousel.Item>
                                    <div className="ourLatestDeals-slider-content">
                                    <div className="ourLatestDeals-slider-content-left-section">
                                        <Table tableContent={tableContentClosed.table1} />
                                    </div>
                                    <div className="ourLatestDeals-slider-content-right-section">
                                        <Table tableContent={tableContentClosed.table2}  />
                                    </div>
                                    </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <div className="ourLatestDeals-slider-content">
                                    <div className="ourLatestDeals-slider-content-left-section">
                                        <Table tableContent={tableContentClosed.table3}  />
                                    </div>
                                    <div className="ourLatestDeals-slider-content-right-section">
                                        <Table tableContent={tableContentClosed.table4}  />
                                    </div>
                                    </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <div className="ourLatestDeals-slider-content">
                                    <div className="ourLatestDeals-slider-content-left-section">
                                        <Table tableContent={tableContentClosed.table5}  />
                                    </div>
                                    <div className="ourLatestDeals-slider-content-right-section">
                                        <Table tableContent={tableContentClosed.table6}  />
                                    </div>
                                    </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <div className="ourLatestDeals-slider-content">
                                    <div className="ourLatestDeals-slider-content-left-section">
                                        <Table tableContent={tableContentClosed.table7}  />
                                    </div>
                                    <div className="ourLatestDeals-slider-content-right-section">
                                        <Table tableContent={tableContentClosed.table8}  />
                                    </div>
                                    </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <div className="ourLatestDeals-slider-content">
                                    <div className="ourLatestDeals-slider-content-left-section">
                                        <Table tableContent={tableContentClosed.table9}  />
                                    </div>
                                    <div className="ourLatestDeals-slider-content-right-section">
                                        <Table tableContent={tableContentClosed.table10}  />
                                    </div>
                                    </div>
                            </Carousel.Item>
                        </Carousel>
            }
        </div>
        </div>
    </div>
  )
}

export default OurLatestDeals
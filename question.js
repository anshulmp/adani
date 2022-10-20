const awards = [
    {
      name: 'James Peebles',
      category: 'Physics',
      research: 'Theoretical discoveries in physical cosmology',
      year: 2019,
    },
    {
      name: 'Michel Mayor',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'Didier Queloz',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'John B. Goodenough',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'M. Stanley Whittingham',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Akira Yoshino',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Arthur Ashkin',
      category: 'Physics',
      research: 'Optical tweezers and their application to biological systems',
      year: 2018,
    },
    {
      name: 'Gerard Mourou',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Donna Strickland',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018,
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
  ];
  
  let outerset =[]
  
  let set =[]
  let i
  let length = awards.length
  for(i =1;i<length-1;i++){
  
   if(awards[i].category==awards[i+1].category){
  
      set.push(awards[i])
      
    }else{
      outerset.push(set)
    
      set=[]
  
    }
  }
  
  
  outerset[0].push(awards[0])
  const prizes = []
  outerset.forEach((item)=>{
    // console.log(item)
    let obj
    let winners = []
   total_divide = item.length
    let newshareset =[]
    let shareset =[]
  for(let i=0;i<item.length-1;i++){
    if(item[i].description==item[i+1].description){
      newshareset.push(item)
      
    }else{
    //  item.forEach((item2,i)=>{
      
    //   let winner = {
    //     name:item2.name,
    //     share:1/newshareset.length
    //   }
    //   winners.push(winner)
    // })
      
      newshareset=[]
    }
  }
    // console.log(newshareset)
    item.forEach((item2,i)=>{
      
      let winner = {
        name:item2.name,
        share:1/item.length
      }
      winners.push(winner)
    })
    obj = {
      category:item[0].category,
      year:item[0].year,
      winners:winners
    }
    
    prizes.push(obj)
    
  
  })
  console.log(prizes)
  // console.log(prizes[1].winners)
  
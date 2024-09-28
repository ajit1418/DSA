db.sales.aggregate([
   
    { $unwind: "$items" },
  
  
    {
      $addFields: {
        yearMonth: {
          $dateToString: { format: "%Y-%m", date: "$date" }
        },
        revenue: { $multiply: ["$items.quantity", "$items.price"] } 
      }
    },
  
    
    {
      $group: {
        _id: { store: "$store", month: "$yearMonth" },
        totalRevenue: { $sum: "$revenue" }, 
        averagePrice: { $avg: "$items.price" } 
      }
    },
  
   
    {
      $project: {
        _id: 0,
        store: "$_id.store",
        month: "$_id.month",
        totalRevenue: 1,
        averagePrice: 1
      }
    },
  
    
    {
      $sort: {
        store: 1,
        month: 1
      }
    }
  ]);
  
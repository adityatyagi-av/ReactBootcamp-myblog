import React from 'react'
import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";
  const supabase = createClient("link", "anonkey");
const Blog = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    fetchData();
  console.log(data)
    
  }, [])
  async function fetchData() {
    const { data } = await supabase.from("blogs").select();
    setData(data);
  }
  return (
    <div>
      Blogs
    </div>
  )
}

export default Blog

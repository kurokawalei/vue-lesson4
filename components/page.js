
export const pageinfo = {

  props: ['pages'],
 
    template : `<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center pagination-lg">
      <li class="page-item " :class="{ 'disabled': !pages.has_pre }" >
        <a href="javascript:;" class="page-link" @click="  $emit( 'changepage' , pages.current_page - 1 )">上一頁</a>
      </li>

      <li class="page-item" v-for="(page,index) in pages.total_pages" :key="index" :class="{'active': page === pages.current_page}">

      <a class="page-link" href="javascript:;"  @click="  $emit( 'changepage' , page ) " >{{ page }} </a>

      </li>
    
     
      <li class="page-item"  :class="{ 'disabled': !pages.has_next }" >
        <a class="page-link" href="javascript:;"  @click="  $emit( 'changepage' , pages.current_page + 1 ) " >下一頁</a>
      </li>
    </ul>
  </nav>`

  

};


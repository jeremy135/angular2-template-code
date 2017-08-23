  import { Routes, RouterModule } from '@angular/router';                                                                 
                                                                                                                          
  const routes: Routes = [                                                                                                
    {                                                                                                                     
      path: '',                                                                                                           
      component: Component,                                                                                               
      children: [                                                                                                         
        {                                                                                                                 
          path: '',                                                                                                       
          component: Component                                                                                            
        }                                                                                                                 
      ]                                                                                                                   
    }                                                                                                                     
  ];                                                                                                                      
                                                                                                                          
  export const ComponentRoutes = RouterModule.forChild(routes);  

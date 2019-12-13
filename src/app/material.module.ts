import {NgModule} from '@angular/core'
import{ 
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        
} from '@angular/Material';  
import{ AppRoutingModule} from './app-routing.module'        
@NgModule ({
    imports:[MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        AppRoutingModule,
        
    ],
    exports:[MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        AppRoutingModule,
     
    ],

})
export class MaterialModule {}
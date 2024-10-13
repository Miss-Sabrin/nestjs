import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas=[
        {id:0,name:"sabrinA",weapon:"stars"} ,
        {id:1,name:"sabrinB",weapon:"stars SAB"} 
    ];
    getNinjas(weapon? :"stars" | "stars SAB"){
        if(weapon){
            return this.ninjas.filter((ninja)=>ninja.weapon === weapon);
        }
        return this.ninjas
    }

    //get by id
    getNinja(id:number){
        const ninja=this.ninjas.find((ninja)=>ninja.id ===id);
        if(!ninja){
            throw new Error('ninja no found');
        }
        return ninja
    }

    //!create type
    createNinja(createNinjaDto: CreateNinjaDto) {
        console.log('Creating Ninja with DTO:', createNinjaDto);
        const newNinja = {
            ...createNinjaDto,
            id: Date.now(),
        };
        this.ninjas.push(newNinja);
        console.log('Ninjas Array:', this.ninjas);
        return newNinja;
    }
    

    // ! UPDATE TYPE
    updateNinja(id:number , updateNinjaDto: UpdateNinjaDto){
        this.ninjas=this.ninjas.map((ninja)=>{
            if(ninja.id===id){
                return {...ninja, ...updateNinjaDto};
            }
            return ninja
        });
        return this.getNinja(id)
    }

    // !DELETE

    removeNinja(id:number){
        const toBeRemoved=this.getNinja(id);
        this.ninjas=this.ninjas.filter((ninja)=> ninja.id !==id);

        return toBeRemoved;
    }
    

}

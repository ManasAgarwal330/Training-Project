import {Entity} from '../modals/Entity'
export interface EntityState<T extends Entity = Entity> {
  byId: {
    [id: number]: T;
  };
}

export const addMany =<T extends EntityState = EntityState>(
  state: EntityState,
  entities: Entity[]
) => {
    const entityMap = entities.reduce((prev,entity) => {
        return {...prev,[entity.id]:entity};
    },{})
    return {...state,byId:{...state.byId,...entityMap}} as T;
};

export const addOne = <T extends EntityState = EntityState>(state:EntityState,entity:Entity) => {
  return {...state,byId:{...state.byId,[entity.id]:entity}} as T;
}

export const getIds = (entities:Entity[]) => entities.map(e => e.id);


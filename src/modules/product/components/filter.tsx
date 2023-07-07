import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';

export const Filter = () => {
  return (
    <>
      {/* PRICE */}
      <div>
        <h2 className="mb-4 font-medium">Price</h2>

        <div className="flex items-center gap-6">
          <Input type="number" min={0} max={9999} placeholder="0 - 9,999" />
          <Input type="number" min={10000} max={15000} placeholder="10,000 - 15,000" />
        </div>
      </div>
      {/* END PRICE */}

      {/* CATEGORIES */}
      <div>
        <h2 className="mb-4 font-medium">Category</h2>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="r1" checked />
            <Label htmlFor="r1" className="text-base font-normal">
              All
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sofa" id="r1" />
            <Label htmlFor="r2" className="text-base font-normal">
              Sofa
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="chairs" id="r2" />
            <Label htmlFor="r3" className="text-base font-normal">
              Chairs
            </Label>
          </div>
        </RadioGroup>
      </div>
      {/* END CATEGORIES */}

      <div className="grid grid-cols-2 gap-6">
        <Button size={'lg'} variant={'outline'}>
          Reset
        </Button>
        <Button size={'lg'}>Apply filter</Button>
      </div>
    </>
  );
};

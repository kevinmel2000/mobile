#import <UIKit/UIKit.h>
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface RNProfileOptions : NSObject <RNKiwiOptions>

- (instancetype)initWithDimensions:(NSDictionary *)dimensions;
@property (nonatomic, weak, nullable) NSDictionary* dimensions;

@end

